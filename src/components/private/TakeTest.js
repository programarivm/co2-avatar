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
      food: {
        q01: [50],
        q02: [50],
        q03: [50]
      },
      transport: {
        q01: [50],
        q02: [50],
        q03: [50]
      },
      residential: {
        q01: [50],
        q02: [50],
        q03: [50]
      }
    };
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
      body: JSON.stringify(this.state)
    }).then(res => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    // TODO:
    // Add more questions...
    return (
      <div>
        <Container className="TakeTest">
          <Row>
            <Col lg="12">
              <Row className="mt-4">
                <h5 className="m-4">Junk food is rubbish.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.food.q01}
                  onChange={values => this.setState({ food: { ...this.state.food, q01: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">You know a few handy tricks to keep your house warm in winter.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.residential.q03}
                  onChange={values => this.setState({ residential: { ...this.state.residential, q03: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">Second-hand clothes are good for you.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.residential.q02}
                  onChange={values => this.setState({ residential: { ...this.state.residential, q02: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">When the weather allows it, you prefer to walk instead of drive to work.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.transport.q01}
                  onChange={values => this.setState({ transport: { ...this.state.transport, q01: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">Lights are turned off in your house if they don't have to be on.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.residential.q01}
                  onChange={values => this.setState({ residential: { ...this.state.residential, q01: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">You never throw away the food you buy.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.food.q02}
                  onChange={values => this.setState({ food: { ...this.state.food, q02: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">You avoid taking a plane because you know it produces a lot of carbon emissions.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.transport.q02}
                  onChange={values => this.setState({ transport: { ...this.state.transport, q02: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">You are usually aware about the calories in the foods you eat.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.food.q03}
                  onChange={values => this.setState({ food: { ...this.state.food, q03: values } })}
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
              </Row>
              <Row className="mt-4">
                <h5 className="m-4">Walking and cycling are great for your mind and body.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.transport.q03}
                  onChange={values => this.setState({ transport: { ...this.state.transport, q03: values } })}
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
              </Row>
              <Row className="mt-5">
                <Button
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
