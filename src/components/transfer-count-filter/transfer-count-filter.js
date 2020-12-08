import React from 'react';

import classes from './transfer-count-filter.module.scss';

const TransferCountFilter = () => (
	<aside className={`${classes['content-block__filters']} ${classes['filters-block']}`}>
		<form action="" className={classes['aside-filters']}>
			<h3 className={classes['aside-filters__title']}>Количество пересадок</h3>

			<fieldset className={classes['aside-filters__group']}>
				<input className={classes['aside-filters__field']} type="checkbox" id="transfer-var-all" />
				<label className={classes['aside-filters__label']} htmlFor="transfer-var-all">
					Все
				</label>
			</fieldset>

			<fieldset className={classes['aside-filters__group']}>
				<input className={classes['aside-filters__field']} type="checkbox" id="transfer-var-without" />
				<label className={classes['aside-filters__label']} htmlFor="transfer-var-without">
					Без пересадок
				</label>
			</fieldset>

			<fieldset className={classes['aside-filters__group']}>
				<input className={classes['aside-filters__field']} type="checkbox" id="transfer-var-one" />
				<label className={classes['aside-filters__label']} htmlFor="transfer-var-one">
					1 пересадка
				</label>
			</fieldset>

			<fieldset className={classes['aside-filters__group']}>
				<input className={classes['aside-filters__field']} type="checkbox" id="transfer-var-two" />
				<label className={classes['aside-filters__label']} htmlFor="transfer-var-two">
					2 пересадки
				</label>
			</fieldset>

			<fieldset className={classes['aside-filters__group']}>
				<input className={classes['aside-filters__field']} type="checkbox" id="transfer-var-three" />
				<label className={classes['aside-filters__label']} htmlFor="transfer-var-three">
					3 пересадки
				</label>
			</fieldset>
		</form>
	</aside>
);

export default TransferCountFilter;
