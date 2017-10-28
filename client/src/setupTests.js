import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import raf from './tempPolyfills';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
configure({ adapter: new Adapter() });

