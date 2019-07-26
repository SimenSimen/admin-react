import { list } from 'core/RouteManager'
import * as testData from '../test_data/testData'
import _ from 'lodash'

const routeList = list()

export function fakeRequest(uri, parmas) {
    const data = {}

    const routeKey = _.findKey(routeList, function(value) {
        return uri === value
    })

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(data)
        }, getRandom(150, 400))
    })
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function ajaxLoginHandler() {}
