
import ava from 'ava' ;

import * as spec from 'aureooms-js-heap-spec' ;

import PairingHeap from '../../src' ;

const heaps = [
	[ 'PairingHeap' , compare => new PairingHeap( compare ) ] ,
] ;

spec.test( ava , heaps , { references : true , length : false } ) ;