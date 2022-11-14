const Cat = require('../../../models/cat');

jest.mock('../../../models/cat');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig');

describe('Cat class', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('succesfully resolves cat query', () => {
            
        })
    })

})