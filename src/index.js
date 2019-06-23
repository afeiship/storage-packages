import React from 'react';
import nx from 'next-js-core2';
import { ReduxAppBase, reduxRender } from 'next-react-redux';
import delay from './components/delay';
import './assets/styles/index.scss';

@reduxRender('app', { prefix: 'lite-kits', loadable: false })
export default class extends ReduxAppBase {
  static initialState(inStore) {
    return {
      memory: {
        main: {
          prop1: 'value1'
        }
      }
    };
  }

  async componentDidMount() {
    console.log('nx.$global', nx.$global);
    await delay(3000);
    console.log('3s later:', nx, nx.VERSION);
    console.log(nx.$memory);
  }

  render() {
    return (
      <div className="clearfix container">
        <h1 className="l">Hello readers!</h1>
        <span className="icon-audio r">RIGHT</span>
      </div>
    );
  }
}
