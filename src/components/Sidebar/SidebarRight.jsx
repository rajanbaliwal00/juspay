import { Flex, theme, Typography } from "antd";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const SidebarRight = () => {
  const {
    token: {
      gap,
      gapXs,
      paddingXSmall,
      paddingXSmall2,
      paddingXSmall3,
      paddingLarge,
      gapLarge,
      gapXlarge,
      radiusSmall,
      black05,
      black20,
      black40,
      black100,
      colorPrimaryBrand,
    },
  } = theme.useToken();
  const { Text } = Typography;

  return (
    <Flex style={{ padding: paddingLarge, gap: gapXlarge }} vertical>
      <Notifications />
      <Activities />
      <Contacts />
    </Flex>
  );
};

export default SidebarRight;
