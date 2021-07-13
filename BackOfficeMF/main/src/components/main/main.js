import React, { useState, useEffect, useCallback } from "react";
import Parcel from "single-spa-react/parcel";
import { app, selectTab, closeTab } from "@prolab/common";
import { makeStyles, Tabs, TabPanel, Tab, Grid } from "@prolab/styleguide";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
      flexDirection: "column",
      flexWrap: "nowrap",
      height: "100%",
    },
    container: {
      flexDirection: "column",
      flexWrap: "nowrap",
      height: "100%",
    },
    main: {
      height: "calc(100% - 25px)",
    },
    tabPanel: {
      backgroundColor: theme.palette.background.box,
      height: "calc(100% - 35px)",
      boxShadow: "0px 0px 10px #0001",
      borderRadius: "10px 0 10px 10px",
    },
    tabPanelItem: {
      height: "100%",
    },
    tabPanelEmpty: {
      borderRadius: 10,
    },
    titleHeader: {
      alignItems: "center",
      margin: 20,
    },
    pageTitle: {
      marginRight: 10,
      fontSize: 16,
    },
    spinner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  
    mainMobile: {
      height: "100%",
    },
    rootMobile: {
      overflow: "hidden auto",
      height: "100%",
    },
    scrollTopBtn: {
      position: "absolute",
      bottom: 15,
      right: -30,
      opacity: 0,
      transition: "right 0.3s, opacity 0.3s",
    },
    scrollTopBtnMobile: {
      bottom: 60,
    },
    scrollTopBtnShow: {
      right: 70,
      opacity: 1,
    },
    scrollTopBtnShowMobile: {
      right: 15,
      opacity: 1,
    },
    moreLeftIcon: {
      height: 42,
      width: 42,
      backgroundColor: theme.palette.primary.main,
      fill: "#FFF",
      borderRadius: 50,
      padding: 12,
      strokeWidth: 2,
      stroke: "#FFF",
    },
    closeButton: {
      marginRight: 10,
    },
    closeIcon: {
      width: 10,
      height: 10,
    },
  
    tab: {
      backgroundColor: theme.palette.background.box,
      borderRadius: "10px 10px 0 0",
      minHeight: 38,
      opacity: 0.5,
      marginLeft: 2,
      zIndex: 2,
      backgroundImage: `linear-gradient(180deg, ${theme.palette.text.secondary}44 20%, transparent 100%)`,
    },
    tabLabel: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    indicator: {
      display: "none",
      top: 0,
      zIndex: 3,
      height: 9,
      backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main}44, transparent)`,
      borderRadius: "10px 10px 0 0",
      backgroundColor: "transparent",
    },
    selectedTab: {
      color: theme.palette.primary.main,
      overflow: "inherit",
      zIndex: 1,
      filter: "none",
      backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main}44 0%, transparent 40%)`,
      "&:before": {
        content: "''",
        position: "absolute",
        bottom: 0,
        right: -30,
        width: 30,
        height: 30,
        borderBottomLeftRadius: "50%",
        boxShadow: `0 15px 0 0px ${theme.palette.background.box}`,
      },
      "&:after": {
        content: "''",
        position: "absolute",
        bottom: 0,
        left: -30,
        width: 30,
        height: 30,
        borderBottomRightRadius: "50%",
        boxShadow: `0 15px 0 0px ${theme.palette.background.box}`,
        backgroundColor: "transparent",
      },
    },
    innerTabs: {
      minHeight: 38,
    },
    statusBar: {
      flex: 1,
    },
    statusBarContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      padding: "5px 10px 0 10px",
      color: theme.palette.text.secondary,
    },
    time: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      "&:before": {
        content: "''",
        width: 1,
        height: "100%",
        backgroundColor: `${theme.palette.text.secondary}55`,
        display: "flex",
        marginLeft: 10,
      },
    },
    "@keyframes pulse": {
      "0%": {
        boxShadow: `0 0 0 0 ${theme.palette.primary.main}bb`,
      },
      "70%": {
        boxShadow: `0 0 0 10px ${theme.palette.primary.main}00`,
      },
      "100%": {
        boxShadow: `0 0 0 0 ${theme.palette.primary.main}00`,
      },
    },
    timeDot: {
      width: 6,
      height: 6,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 50,
      marginRight: 5,
      boxShadow: `0 0 0 0 ${theme.palette.primary.main}bb`,
      animation: "$pulse 2s infinite",
    },
    clock: {
      marginLeft: 5,
    },
    tabScrollButtonRoot: {
      boxShadow: "0px 0px 10px #000",
      zIndex: 1,
      "&$disabledTabScrollButton": {
        opacity: 0.2,
        boxShadow: "none",
      },
    },
    disabledTabScrollButton: {},
    emptyTab: {
      height: "100%",
      flexDirection: "column",
      alignItems: "Center",
      justifyContent: "center",
      fontSize: 22,
      color: theme.palette.border.primary,
    },
    logoIcon: {
      width: 80,
      height: 80,
      fill: theme.palette.border.primary,
    },
  }));

const Main = () => {
  const [openedTabs, setOpenedTabs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    app.subscribe(({ openedTabs }) => setOpenedTabs(openedTabs));
  }, []);

  const tabChangeHandler = useCallback((event, tabIndex) => {
    selectTab(tabIndex);
  }, []);

  const closeTabClickHandler = useCallback(
    (index, selectedTab) => {
      closeTab(index, selectedTab);
    },
    [closeTab]
  );

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.main}>
        <Grid container className={classes.container}>
          <Grid item>
            <Tabs
              orientation="horizontal"
              value={openedTabs.findIndex((t) => t.selected)}
              onChange={tabChangeHandler}
              className={classes.innerTabs}
              indicatorColor="primary"
              scrollButtons="auto"
              classes={{
                indicator: classes.indicator,
              }}
              TabScrollButtonProps={{
                classes: {
                  root: classes.tabScrollButtonRoot,
                  disabled: classes.disabledTabScrollButton,
                },
              }}
            >
              {openedTabs.map((tab, i) => (
                <Tab
                  key={i}
                  className={classes.tab}
                  label={tab.title}
                  id={`tab-${i}`}
                  onClose={() => closeTabClickHandler(i, tab.selected)}
                  closeClassName={classes.closeButton}
                  closeIconClassName={classes.closeIcon}
                  labelClassName={classes.tabLabel}
                  selectedClassName={classes.selectedTab}
                ></Tab>
              ))}
            </Tabs>
          </Grid>
          <Grid
            item
            className={clsx(
              openedTabs.length === 0 && classes.tabPanelEmpty,
              classes.tabPanel
            )}
          >
            {openedTabs.length === 0 ? (
              <Grid container className={classes.emptyTab} spacing={3}>
                <Grid item>
                </Grid>
                <Grid item>Admin Panel</Grid>
              </Grid>
            ) : (
              openedTabs.map((tab, i) => (
                <TabPanel
                  value={openedTabs.findIndex((t) => t.selected)}
                  index={i}
                  key={i}
                  className={classes.tabPanelItem}
                >
                  <Parcel config={tab.component}></Parcel>
                </TabPanel>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
