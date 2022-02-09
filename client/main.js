import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';
import '/imports/grapher'

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.query1 = new ReactiveVar("");
    this.query2 = new ReactiveVar("");


});

Template.hello.helpers({
    query1() {
        return Template.instance().query1.get();
    },
    query2() {
        return Template.instance().query2.get();
    },
});

Template.hello.events({
    'click button.query1'(event, instance) {

        let query1 = firstQuery.clone()
        let handle = query1.subscribe();

        instance.autorun(function () {
            if (handle.ready()) {
                console.log("query1", JSON.stringify(query1.fetchOne().links))
                instance.query1.set(JSON.stringify(query1.fetchOne().links))
            }
        })
    },
    'click button.query2'(event, instance) {

        let query2 = secondQuery.clone()
        let handle = query2.subscribe();

        instance.autorun(function () {
            if (handle.ready()) {
                console.log("query2", JSON.stringify(query2.fetchOne().links))
                instance.query2.set(JSON.stringify(query2.fetchOne().links))
            }
        })
    },
});
