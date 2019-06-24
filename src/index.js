import React from 'react';
import nx from 'next-js-core2';
import { ReduxAppBase, reduxRender } from 'next-react-redux';
import delay from './components/delay';
import NxOfflineSw from 'next-offline-sw';
import hotable from 'react-hmr-decorator';
import './assets/styles/index.scss';

@hotable(module)
@reduxRender('app', { prefix: 'lite-kits', loadable: false })
export default class extends ReduxAppBase {
  static initialState(inStore) {
    return {
      memory: {
        hasUpdate: false,
        main: {
          prop1: 'value1'
        }
      }
    };
  }

  async componentDidMount() {
    console.log('nx.$global', nx.$global);
    this.installSw();
    await delay(3000);
    console.log('3s later:', nx, nx.VERSION);
    console.log(nx.$memory);
  }

  installSw() {
    NxOfflineSw.install({
      onUpdateReady: function() {
        nx.$memory = { hasUpdate: true };
        console.log('SW Event HAHAH:', 'onUpdateReady');
      }
    });
  }

  render() {
    console.log('abc!!');
    return (
      <div className="clearfix container">
        <h1 className="l">FEI__readers!</h1>
        <span className="icon-audio r">RIGHT!</span>
      </div>
    );
  }
}
