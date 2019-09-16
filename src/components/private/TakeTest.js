import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import { Range } from 'react-range';

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
      values: {
        q01: [50],
        q02: [50],
        q03: [50]
    }};
  }

  render() {
    // TODO:
    // Add more questions...
    return (
      <div>
        <Container className="TakeTest">
          <Row>
            <Col lg="12">
              <Row>
                <h5 className="m-4">You prefer to walk instead of drive to work if the weather allows it.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.values.q01}
                  onChange={values => this.setState({ values: { ...this.state.values, q01: values} })}
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
                <h5 className="m-4">You love junk food.</h5>
                <Range
                  step={0.1}
                  min={0}
                  max={100}
                  values={this.state.values.q02}
                  onChange={values => this.setState({ values: { ...this.state.values, q02: values} })}
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
                  values={this.state.values.q03}
                  onChange={values => this.setState({ values: { ...this.state.values, q03: values} })}
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { TakeTest };
