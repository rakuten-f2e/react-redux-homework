import { mapDispatchToProps } from '../../src/client/containers/deleteBtnContainer';

describe('./deleteBtnContainer', () => {
  describe('When delete buntton is clicked', () => {
    it('should call deleteRow function after onClick event', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onClick();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
