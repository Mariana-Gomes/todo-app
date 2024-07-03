import { theme } from "../../theme";
import styled from "styled-components/native";

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 48px 20px;
  border-top-color: ${theme.colors.base.gray400};
  border-width: 1px;
  border-left-color: ${theme.colors.base.gray600};
  border-right-color: ${theme.colors.base.gray600};
  border-bottom-color: ${theme.colors.base.gray600};
`;

export const EmptyImage = styled.Image`
  margin-bottom: 16px;
`;

export const EmptyTitle = styled.Text`
  font-family: ${theme.font_family.bold};
  font-size: ${theme.font_size.lg};
  color: ${theme.colors.base.gray300};
`;

export const EmptyText = styled.Text`
  font-family: ${theme.font_family.regular};
  font-size: ${theme.font_size.lg};
  color: ${theme.colors.base.gray300};
`;
