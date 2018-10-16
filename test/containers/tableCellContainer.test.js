import { mapDispatchToProps } from '../../src/client/containers/tableCellContainer';

describe('./tableCellContainer', () => {
  describe('When cell data is changed', () => {
    it('should call updateCell function after onChange event', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onChange();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
