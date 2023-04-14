import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type OwnProps = {
  viewName: string;
  viewIcon?: IconProp;
};

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  color: ${(props) => props.theme.text60};
  font-weight: 500;
  padding-left: ${(props) => props.theme.spacing(2)};
`;

const StyledIcon = styled.div`
  display: flex;
  margin-right: ${(props) => props.theme.spacing(2)};
`;

const StyledViewSection = styled.div`
  display: flex;
`;

const StyledFilters = styled.div`
  display: flex;
  font-weight: 400;
  margin-right: ${(props) => props.theme.spacing(1)};
`;

const StyledFilterButton = styled.div`
  display: flex;
  margin-left: ${(props) => props.theme.spacing(4)};
`;

function TableHeader({ viewName, viewIcon }: OwnProps) {
  return (
    <StyledTitle>
      <StyledViewSection>
        <StyledIcon>
          {viewIcon && <FontAwesomeIcon icon={viewIcon} size="lg" />}
        </StyledIcon>
        {viewName}
      </StyledViewSection>
      <StyledFilters>
        <StyledFilterButton>Filter</StyledFilterButton>
        <StyledFilterButton>Sort</StyledFilterButton>
        <StyledFilterButton>Settings</StyledFilterButton>
      </StyledFilters>
    </StyledTitle>
  );
}

export default TableHeader;
