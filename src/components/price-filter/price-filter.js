import React from 'react';

import classes from './price-filter.module.scss';

const PriceFilter = () => (
	<form className={classes['result-filters']}>
		<input className={classes['result-filters__field']} name="top-filter" type="radio" id="cheap" checked />
		<label className={classes['result-filters__label']} htmlFor="cheap">
			Самый дешевый
		</label>

		<input className={classes['result-filters__field']} name="top-filter" type="radio" id="faster" />
		<label className={classes['result-filters__label']} htmlFor="faster">
			Самый быстрый
		</label>
	</form>
);

export default PriceFilter;
