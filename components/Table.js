import React from "react";
import css from "styled-jsx/css";

import Text from "./Text";

const Table = ({ headers = [], items = [], weights = [], renderRowItem = () => {} }) => {
	return (
		<div className="table">
			{items.length ? headers.map((header, i) => (
				<div key={`column-${i}`} className="table-column" style={{ flex: weights[i] }}>
					<div className="table-header-item">
						<Text desc>{header.display}</Text>
					</div>
					<div className="table-rows">
						{items.map((item, j) => (
							<div key={`row-${i}-${j}`} className="table-row-item">
								{renderRowItem(header.key, item)}
							</div>
						))}
					</div>
				</div>
			)) : (
				<div className="table-no-data">
					<Text desc>No data found.</Text>
				</div>
			)}
			<style jsx>{styles}</style>
		</div>
	);
};

const styles = css`
.table {
	display: flex;
	border: 1px solid #EBEBEB;
	border-radius: 9px;
	padding: 10px 0;
	box-sizing: border-box;
}

.table-column {
	flex-flow: column;
}

.table-no-data {
	box-sizing: border-box;
	padding: 60px 0;
	text-align: center;
	width: 100%;
}

.table-row-item, .table-header-item {
	padding: 10px 0;
	text-align: center;
}
`;

export default Table;