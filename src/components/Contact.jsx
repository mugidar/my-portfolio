import React from "react";
import styled from "styled-components";
import MapChart from "./MapChart";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
  margin: 0 auto;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: white;
`;
const Title = styled.h1`
  font-weight: 200;
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 20px;
`;
const Input = styled.input`
  padding: 10px;
  border: 0;
  outline-color: pink;
  outline-offset: 6px;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 10px;
  outline-offset: 6px;
  border: 0;
  outline-color: pink;
  border-radius: 5px;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 10px 0;
  background-color: pink;
  border: 0;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea rows={10} placeholder="Your message" />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          {/* 3d model */}
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
