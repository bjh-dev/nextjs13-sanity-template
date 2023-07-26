import { defineField, defineType } from "sanity";

export default defineType({
    name: "settings",
    title: "Settings",
    type: "document",
    fields: [
        defineField({
            name: "siteTitle",
            title: "Site Title",
            type: "string",
        }),
        defineField({
            name: "siteDescription",
            title: "Site Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "siteUrl",
            title: "Site URL",
            type: "string",
        }),
    ],
});
