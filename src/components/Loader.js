import React from 'react';
import { Circular } from 'styled-loaders-react';

const Loader = ({ children, loading }) => <>{loading ? <Circular /> : children}</>;

export default Loader;
