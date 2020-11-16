import React, { PureComponent, useEffect, useState } from 'react';
import moment from 'moment'
const ActualityDetailComponent = ({ singleActuality }: any) => {

	return (
		<div className="actuality-detail">
			<img src="/detail-img.png" alt="" />
			<div className="actuality-content">
				<button>Catégorie</button>
				<h1>{singleActuality.title}</h1>
				<p>Date de mise en ligne : {moment(singleActuality.createdAt).format('DD/MM/YY')}</p>
				<div>
					<p className="description">
						{singleActuality.resume}
					</p>
				</div>
				<iframe width="560" height="350" src="https://www.youtube.com/embed/zrmMYUdL90k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<div className="description">
					{singleActuality.content}
				</div>
			</div>
		</div>
	)
}
export default ActualityDetailComponent
