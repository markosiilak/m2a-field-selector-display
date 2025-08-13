import DisplayComponent from "./display.vue";

export default {
  id: "m2a-field-selector-display",
  name: "M2A Field Selector Display",
  icon: "link",
  description: "Display component for M2A Field Selector values",
  component: DisplayComponent,
  options: [
    {
      field: "display",
      name: "Display Format",
      type: "string",
      meta: {
        width: "half",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Raw", value: "raw" },
            { text: "Formatted", value: "formatted" },
            { text: "Related Values", value: "related-values" },
            { text: "Labels", value: "labels" },
          ],
          default: "formatted",
        },
      },
    },
  ],
  types: ["json", "alias"],
};
