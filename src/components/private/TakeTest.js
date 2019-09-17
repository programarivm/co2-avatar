import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import { Range } from 'react-range';

const BASE_URL = 'http://api.co2.today';

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

class TakeTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          type: 'food',
          text: 'Junk food is rubbish.',
          values: [50]
        },
        {
          type: 'food',
          text: 'You never throw away the food you buy.',
          values: [50]
        },
        {
          type: 'food',
          text: 'You are usually aware about the calories in the foods you eat.',
          values: [50]
        },
        {
          type: 'transport',
          text: 'When the weather allows it, you prefer to walk instead of drive to work.',
          values: [50]
        },
        {
          type: 'transport',
          text: 'You avoid taking a plane because you know it produces a lot of carbon emissions.',
          values: [50]
        },
        {
          type: 'transport',
          text: 'You are usually aware about the calories in the foods you eat.',
          values: [50]
        },
        {
          type: 'residential',
          text: 'You know a few handy tricks to keep your house warm in winter.',
          values: [50]
        },
        {
          type: 'residential',
          text: 'Second-hand clothes are good for you.',
          values: [50]
        },
        {
          type: 'residential',
          text: 'Second-hand clothes are good for you.',
          values: [50]
        }
      ]
    };
    this.state.questions.sort(function() {
      return 0.5 - Math.random();
    });
    this.seeResults = this.seeResults.bind(this);
  }

  seeResults(e) {
    e.preventDefault();
    fetch(BASE_URL + '/calculate', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.questions)
    }).then(res => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    return (
      <div>
        <Container className="TakeTest">
          <h1 className="mt-5">Slide the big squares</h1>
          <Row>
            <Col lg="12">
              {
                this.state.questions.map( (item, i) => <Row className="mt-5">
                  <h5 className="m-4">{item.text}</h5>
                  <Range
                    step={0.1}
                    min={0}
                    max={100}
                    values={item.values}
                    onChange={values => {
                      let newState = Object.assign({}, this.state);
                      newState.questions[i].values = values;
                      this.setState(newState);
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
                  onClick={this.seeResults}
                  block
                >
                See results
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { TakeTest };
