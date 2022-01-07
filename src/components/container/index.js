import React from 'react';
import Aside from '../aside';
import Wraper from '../wraper';

export default () =>{
    return (

<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed">
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
        <Aside />
        <Wraper />

        </div>
        </div>
        </body>
    )
}