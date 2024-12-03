// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.
import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import {Links} from "../../api/links/links";
let TabularTables = {};

TabularTables.Links = new Tabular.Table({
    name: "Links",
    collection: Links,
    columns: [
        {data: "title", title: "Title"},
        {data: "url", title: "URL"},
        {
            data: "createdAt",
            title: "Created At",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).calendar();
                } else {
                    return "Never";
                }
            }
        },
    ]
});

// I also tried registering TabularTables manually but did not work.
// Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);