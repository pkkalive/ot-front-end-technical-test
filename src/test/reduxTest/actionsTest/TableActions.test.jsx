import * as actions from '../../../redux/actions/TableActions';
import * as types from '../../../redux/actionTypes/ActionTypes';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockData = {
  "data": [
    {
      "target": {
        "gene_info": {
          "symbol": "TFPI",
          "name": "tissue factor pathway inhibitor"
        },
        "id": "ENSG00000003436"
      },
      "association_score": {
        "datatypes": {
          "literature": 0.19517772984514156,
          "rna_expression": 0.07211524912501942,
          "genetic_association": 0.22628011248337543,
          "somatic_mutation": 0.0,
          "known_drug": 0.0,
          "animal_model": 0.0,
          "affected_pathway": 0.5
        },
        "overall": 0.5827636456183956,
      }
    },
    {
      "target": {
        "gene_info": {
          "symbol": "EGFR",
          "name": "epidermal growth factor receptor"
        },
        "id": "ENSG00000146648"
      },
      "association_score": {
        "datatypes": {
          "literature": 0.19517772984514156,
          "rna_expression": 0.07211524912501942,
          "genetic_association": 0.22628011248337543,
          "somatic_mutation": 0.0,
          "known_drug": 0.0,
          "animal_model": 0.0,
          "affected_pathway": 0.5
        },
        "overall": 1.0,
      }
    },
  ]
}

export const expectedMockData = [
  {
    "symbol": "EGFR",
    "name": "epidermal growth factor receptor",
    "id": "ENSG00000146648",
    "overall": 1.0,
    "spiderWeb":[0.19517772984514156, 0.07211524912501942, 0.22628011248337543, 0,0,0,0.5],
    "datatypes" : [
      {
        "name": "literature",
        "y": 0.19517772984514156
      },
      {
        "name": "rna_expression",
        "y": 0.07211524912501942
      },
      {
        "name": "genetic_association",
        "y": 0.22628011248337543
      },
      {
        "name": "somatic_mutation",
        "y": 0.0
      },
      {
        "name": "known_drug",
        "y": 0.0
      },
      {
        "name": "animal_model",
        "y": 0.0
      },
      {
        "name": "affected_pathway",
        "y": 0.5
      },
    ]
  },
  {
  "symbol": "TFPI",
  "name": "tissue factor pathway inhibitor",
  "id": "ENSG00000003436",
  "overall": 0.5827636456183956,
  "spiderWeb":[0.19517772984514156, 0.07211524912501942, 0.22628011248337543, 0,0,0,0.5],
  "datatypes" : [
    {
      "name": "literature",
      "y": 0.19517772984514156
    },
    {
      "name": "rna_expression",
      "y": 0.07211524912501942
    },
    {
      "name": "genetic_association",
      "y": 0.22628011248337543
    },
    {
      "name": "somatic_mutation",
      "y": 0.0
    },
    {
      "name": "known_drug",
      "y": 0.0
    },
    {
      "name": "animal_model",
      "y": 0.0
    },
    {
      "name": "affected_pathway",
      "y": 0.5
    },
  ]
}
]

describe('Table Actions', () => {
  it('Table Actions Test Cases', () => {
    const store = mockStore();
    const expectedActions = {
      type: types.GET_TABLE_DATA,
      payload: expectedMockData
    }
    axios.get.mockImplementation(() => Promise.resolve({data: mockData}))
    store.dispatch(actions.getTableData()).then(() => {
      expect(store.getActions()).toEqual([expectedActions])
    })
  })
})