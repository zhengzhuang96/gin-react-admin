import React, { useRef, useEffect } from "react";
import { Row, Col, Card, Statistic, Popover, Tabs, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';
import styles from './index.module.css';
const { TabPane } = Tabs;

const CardIcon = (props) => <Popover placement="top" content={props.content}><ExclamationCircleOutlined className={styles.statisticsIcon} /></Popover>;
const operations = <Button>Extra Action</Button>;
var myChart

function Index(props) {

  const trendRef = useRef(null);

  useEffect(() => {
    myChart = echarts.init(trendRef.current);
    var option;
    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        top: "10%",
        left: "5%",
        bottom: "10%",
        right: "0",
        width:'auto',
        height:'auto'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    };
    myChart.setOption(option);
    setTimeout(() => {
      myChart.resize();
    });
    // 这里是为了让echarts图表随着浏览器的可视区域变化自适应 参照图3，图4的区别（在不刷新页面的情况下）
    // window.addEventListener("resize", () => {
    //   // let p_width = document.body.clientWidth - this.lastWidth;
    //   // this.chart.resize({ width: p_width });
    //   window.onresize = myChart.resize;
    // });
    // window.onresize = myChart.resize;
    window.onresize = myChart.resize;
  }, [])
  
  setTimeout(() => {
    myChart.resize();
  }, 500);

  return (
    <div>
      <p>我是首页</p>
      <Row gutter={16}>
        <Col xl={6} md={12} sm={24} className={styles.col}>
          <Card bordered={false} title="访问量(人次)" extra={<CardIcon content="访问量" />} headStyle={{ border: "none", color: "#00000073", fontSize: "14px", fontWeight: "normal" }}>
            <Statistic value={112893} precision={2} />
          </Card>
        </Col>
        <Col xl={6} md={12} sm={24} className={styles.col}>
          <Card bordered={false} title="接口数量" extra={<CardIcon content="接口数量" />} headStyle={{ border: "none", color: "#00000073", fontSize: "14px", fontWeight: "normal" }}>
            <Statistic value={112893} precision={2} />
          </Card>
        </Col>
        <Col xl={6} md={12} sm={24} className={styles.col}>
          <Card bordered={false} title="***" extra={<CardIcon content="***" />} headStyle={{ border: "none", color: "#00000073", fontSize: "14px", fontWeight: "normal" }}>
            <Statistic value={112893} precision={2} />
          </Card>
        </Col>
        <Col xl={6} md={12} sm={24} className={styles.col}>
          <Card bordered={false} title="接口数量" extra={<CardIcon content="接口数量" />} headStyle={{ border: "none", color: "#00000073", fontSize: "14px", fontWeight: "normal" }}>
            <Statistic value={112893} precision={2} />
          </Card>
        </Col>
      </Row>
      <Card>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="访问趋势" key="1">
            <Row>
              <Col span={24}>
                <div ref={trendRef} style={{ width: "100%", height: "300px" }}></div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
        </Tabs>
      </Card>
    </div>
  )
}

export default Index