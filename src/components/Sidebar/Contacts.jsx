import { Flex, theme, Typography } from "antd";
import { truncateText } from "../../utils/Helpers";
import IconSet1 from "../../assets/IconSet1.png";
import IconSet2 from "../../assets/IconSet2.png";
import IconSet3 from "../../assets/IconSet3.png";
import IconSet4 from "../../assets/IconSet4.png";
import IconSet5 from "../../assets/IconSet5.png";
import IconSet6 from "../../assets/IconSet6.png";

const data = [
  {
    icon: IconSet1,
    title: "Natali Craig",
  },
  {
    icon: IconSet2,
    title: "Drew Cano",
  },
  {
    icon: IconSet3,
    title: "Orlando Diggs",
  },
  {
    icon: IconSet4,
    title: "Andi Lane",
  },
  {
    icon: IconSet5,
    title: "Kate Morrison",
  },
];

const Contacts = () => {
  const {
    token: { gap },
  } = theme.useToken();
  const { Text } = Typography;
  return (
    <Flex style={{ gap }} vertical>
      <Text
        style={{
          fontWeight: 600,
        }}
      >
        Contacts
      </Text>
      {data.map((item, index) => (
        <Flex style={{ gap }}>
          <img src={item.icon} alt="icons" />
          <div>
            <Text
              style={{
                textOverflow: "ellipsis",
              }}
            >
              {truncateText(item.title, 15)}
            </Text>
          </div>
        </Flex>
      ))}
    </Flex>
  );
};

export default Contacts;
