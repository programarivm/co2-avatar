import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { Range } from 'react-range';
import testActions from '../constants/testActionTypes';

const thumb = {
  style: {
    height: '40px',
    width: '40px',
    backgroundColor: '#999'
  }
};

const track = {
  style: {
    height: '6px',
    width: '100%',
    backgroundColor: '#ccc'
  }
};

const questions = () => {
  const items = [
    {
      "type": "food",
      "text": "Junk food is rubbish.",
      "values": [50]
    },
    {
      "type": "food",
      "text": "Your diet is mostly vegan.",
      "values": [50]
    },
    {
      "type": "food",
      "text": "You never throw away the food you buy.",
      "values": [50]
    },
    {
      "type": "food",
      "text": "You are usually aware about the calories in the foods you eat.",
      "values": [50]
    },
    {
      "type": "transport",
      "text": "When the weather allows it, you prefer to walk instead of drive to work.",
      "values": [50]
    },
    {
      "type": "transport",
      "text": "Walking and cycling are great for your mind and body.",
      "values": [50]
    },
    {
      "type": "transport",
      "text": "You don't have a car.",
      "values": [50]
    },
    {
      "type": "transport",
      "text": "You avoid taking a plane because you know it produces a lot of carbon emissions.",
      "values": [50]
    },
    {
      "type": "residential",
      "text": "You know a few handy tricks to keep your house warm in winter.",
      "values": [50]
    },
    {
      "type": "residential",
      "text": "Second-hand clothes are your cup of tea.",
      "values": [50]
    },
    {
      "type": "residential",
      "text": "Most of your furniture is second-hand.",
      "values": [50]
    },
    {
      "type": "residential",
      "text": "Lights are turned off if they don't have to be on.",
      "values": [50]
    }
  ];

  items.sort(function() {
    return 0.5 - Math.random();
  });

  return items;
}

const Test = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(questions());

  return (
    <Container className="Test">
      <Row>
        <Col lg="12">
          <h1 className="mt-5">Slide the squares sincerely</h1>
          {
            items.map((item, i) => <Row key={i} className="mt-5">
              <h5 className="m-4">{item.text}</h5>
              <Range
                step={0.1}
                min={0}
                max={100}
                values={item.values}
                onChange={values => {
                  let newState = Object.assign({}, items);
                  newState[i].values = values;
                  setItems(Object.values(newState));
                }}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      ...track.style
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      ...thumb.style
                    }}
                  />
                )}
              />
            </Row> )
          }
          <Row className="m-5">
            <Button
              className="btn-lg"
              color="primary"
              onClick={() => dispatch({ type: testActions.RESULTS, payload: items })}
              block
            >
            See result
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Test;
