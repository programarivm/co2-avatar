import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import { Range } from 'react-range';
import Api from '../Api.js';
import AppActions from '../actions/AppActions.js';

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
      questions: Api.questions()
    };
    this.seeResults = this.seeResults.bind(this);
  }

  seeResults(e) {
    e.preventDefault();
    let results = Api.results(this.state.questions);
    AppActions.seeResults({
      results: results,
      avatar: Api.avatars().find(item => item.id === results.id_avatar)
    });
    this.props.history.push('/results');
  }

  render() {
    return (
      <Container className="TakeTest">
        {
          Object.keys(this.state).length === 0
            ? <p className="mt-5">
                Loading...
              </p>
            : <Row>
                <Col lg="12">
                <h1 className="mt-5">Slide the big squares</h1>
                {
                  this.state.questions.map( (item, i) => <Row key={i} className="mt-5">
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
        }
      </Container>
    );
  }
}

export { TakeTest };
