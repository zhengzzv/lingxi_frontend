import { defineStore } from "pinia";

export class EditableTab {
  constructor(
    public path: string,
    public label: string,
    public componentName: string
  ) {}
}

const useActiveRouterStoreFunc = defineStore("activeRouter", {
  state: () => {
    return {
      activeRouter: "/home",
      activeTab: "/home",
      routerTabs: new Array<EditableTab>(),
    };
  },
  getters: {
    activeIndex: (state) =>
      state.routerTabs.findIndex((tab) => tab.path === state.activeTab),
  },
});

export const useActiveRouterStore = useActiveRouterStoreFunc;
