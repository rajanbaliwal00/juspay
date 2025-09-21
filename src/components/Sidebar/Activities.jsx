import { Flex, theme, Timeline, Typography } from "antd";
import Activity1 from "../../assets/Activity1.png";
import Activity2 from "../../assets/Activity2.png";
import Activity3 from "../../assets/Activity3.png";
import Activity4 from "../../assets/Activity4.png";
import { truncateText } from "../../utils/Helpers";

const Activities = () => {
  const {
    token: { gap, paddingXSmall, paddingXSmall2, black40 },
  } = theme.useToken();
  const { Text } = Typography;
  return (
    <Flex style={{ gap }} vertical>
      <Text
        style={{
          fontWeight: 600,
          marginBottom: gap,
          padding: `${paddingXSmall} 0`,
        }}
      >
        Activities
      </Text>
      <Timeline
        items={[
          {
            dot: <img src={Activity1} />,
            children: (
              <div>
                <Text>
                  {truncateText("You have a bug that needs that", 15)}
                </Text>
                <br />
                <Text style={{ fontSize: "12px", color: black40 }}>
                  {"Just now"}
                </Text>
              </div>
            ),
          },
          {
            dot: <img src={Activity2} />,
            children: (
              <div>
                <Text>{truncateText("Released a new version", 15)}</Text>
                <br />
                <Text style={{ fontSize: "12px", color: black40 }}>
                  {"Just now"}
                </Text>
              </div>
            ),
          },
          {
            dot: <img src={Activity3} />,
            children: (
              <div>
                <Text>{truncateText("Submitted a bug", 15)}</Text>
                <br />
                <Text style={{ fontSize: "12px", color: black40 }}>
                  {"Just now"}
                </Text>
              </div>
            ),
          },
          {
            dot: <img src={Activity4} />,
            children: (
              <div>
                <Text>{truncateText("Modified A data in Page X", 15)}</Text>
                <br />
                <Text style={{ fontSize: "12px", color: black40 }}>
                  {"Just now"}
                </Text>
              </div>
            ),
          },
        ]}
      />
    </Flex>
  );
};

export default Activities;
