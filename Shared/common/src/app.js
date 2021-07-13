import { BehaviorSubject } from "rxjs";
import { removeItemAtIndex, updateObject } from "./utility";

export const app = new BehaviorSubject({
  openedTabs: [],
  notifications: [],
});

export const openTab = (title, component) => {
  app.next({
    ...app.value,
    openedTabs: [
      ...app.value.openedTabs.map((t) => ({ ...t, selected: false })),
      { title, component, selected: true },
    ],
  });
};

export const selectTab = (tabIndex) => {
  if (tabIndex < app.value.openedTabs.length)
    app.next({
      ...app.value,
      openedTabs: [
        ...app.value.openedTabs.map((t, i) =>
          i === tabIndex ? { ...t, selected: true } : { ...t, selected: false }
        ),
      ],
    });
};

export const closeTab = (index, selectedTab) => {
  const newOpenedTabs = removeItemAtIndex(app.value.openedTabs, index);
  if (selectedTab && newOpenedTabs[newOpenedTabs.length - 1]) {
    newOpenedTabs[newOpenedTabs.length - 1].selected = true;
  }
  app.next({
    ...app.value,
    openedTabs: newOpenedTabs,
  });
};

export const notifySuccess = (message) => {
  return enqueueSnackbar(message, 1);
};

export const notifyError = (message) => {
  return enqueueSnackbar(message, 2);
};

const enqueueSnackbar = (message, type) => {
  const notification = {
    message,
    options: {
      variant: type === 1 ? "success" : "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    },
    key: new Date().getTime() + Math.random(),
  };
  const { notifications } = app.value;
  app.next({
    ...app.value,
    notifications: [
      ...notifications,
      {
        key: notification.key,
        ...notification,
      },
    ],
  });
};

export const removeSnackbar = (key) => {
  const { notifications } = app.value;
  app.next({
    ...app.value,
    notifications: notifications.filter((n) => n.key !== key),
  });
};
