import GenerateActions from '../../../../redux/actions/actionHelper/GenerateActions';

describe('Generate Actions', () => {
  it('Generate Actions Test Cases', () => {
    expect(GenerateActions(undefined, {})).toBeTruthy();
  })
})