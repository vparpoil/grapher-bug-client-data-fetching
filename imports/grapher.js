import {createQuery} from 'meteor/cultofcoders:grapher';
import {Mongo} from "meteor/mongo";

Reference = new Mongo.Collection('Reference');
Link = new Mongo.Collection('Link');

Link.addLinks({
    reference: {
        type: "one",
        collection: Reference,
        field: "meta.refId",
        index: true
    }
})

Reference.addLinks({
    links: {
        type: "many",
        collection: Link,
        inversedBy: 'reference'
    }
})


firstQuery = createQuery('firstQuery', {
    Reference: {
        name: 1,
        links: {
            _id: 1,
            type: 1,
        }
    }
})

secondQuery = createQuery('secondQuery', {
    Reference: {
        name: 1,
        links: {
            meta: 1
        }
    }
})