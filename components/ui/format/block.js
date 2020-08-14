import { FmtCtnr, FmtCtnt } from '../../ui';

export const FmtBlock = (props) => {
  const { attr, attrName, children } = props;
  return (
    <FmtCtnr attr={ attr } attrName={ attrName }>
      <FmtCtnt attr={ attr } attrName={ attrName }>
        { children }
      </FmtCtnt>
    </FmtCtnr>
  );
}