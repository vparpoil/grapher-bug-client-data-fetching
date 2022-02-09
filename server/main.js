import {Meteor} from 'meteor/meteor';
import {Mongo} from "meteor/mongo";
import '/imports/grapher'


Meteor.startup(() => {
    firstQuery.expose({})
    secondQuery.expose({})

    if (Reference.find().count() === 0) {
        let refId = Reference.insert({name: "ref1"})
        let linkId1 = Link.insert({meta: {refId: refId, name: "link1"}, type: "nested"})
        let linkId2 = Link.insert({meta: {refId: refId, name: "link2"}, type: "nested"})
    }
});
