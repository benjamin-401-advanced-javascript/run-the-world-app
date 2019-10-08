// Put this in your application src folder ... and fairy dust gets sprinkled onto your tests...
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
