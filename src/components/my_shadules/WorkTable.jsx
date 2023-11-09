import React, { useRef } from 'react';

import { AuthContexts } from '../../context/AuthContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';

function WorkTable({ data, isStatus , setPendingWorks }) {
	const selectInput = useRef(null)

	const { myBaseUrl } = useAxiosSecure();
	const { user } = AuthContexts();

	// Function to handle the change event of the select element
	const handleSelectChange = (object, value) => {
		const selectedValue = selectInput.current.value;
		console.log(value)
		object.status = value;

		if (value !== "completed") {
			myBaseUrl.put(`/pending_work/${object._id}`, object).then((res) => {
				console.log(res.data)
			}).catch((err) => console.log(err))
		} else {
			myBaseUrl.delete(`/pending_work/delete/${object._id}`).then((res) => {
				console.log(res.data)
			}).catch((err) => console.log(err))

			const filterItem = data.filter(item => item._id !== object._id);
			setPendingWorks(filterItem);
		}
	}



	return (
		<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">

			<div className="overflow-x-auto">
				<table className="min-w-full text-xs">
					<colgroup>
						<col />
						<col />
						<col />
						<col />
						<col />
						<col className="w-24" />
					</colgroup>
					<thead className="dark:bg-gray-700">
						<tr className="text-left">
							<th className="p-3">Service Image</th>
							<th className="p-3">Service Name</th>
							<th className="p-3">User Email</th>
							<th className="p-3">Price</th>
							{isStatus ?
								<th className="p-3">Status</th>
								: null
							}
						</tr>
					</thead>
					<tbody>
						{data && data.map(item => (
							<tr key={item._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
								<td className="p-3">
									<img src={item.photoLink} alt="" className="self-center flex-shrink-0 w-16 h-16 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700 object-cover" />
								</td>
								<td className="p-3">
									<p>{item?.serviceName}</p>
								</td>
								<td className="p-3">
									<p>{item?.userEmail}</p>
								</td>
								<td className="p-3">
									<p>{item?.price}</p>
								</td>
								{
									isStatus ?
										<td className="p-3">
											<select defaultValue={item?.status} onChange={(e) => handleSelectChange(item, e.target.value)} ref={selectInput} className="py-3 px-4 pe-9 block w-[150px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 bg-blue-500">
												<option value="pending">Pending</option>
												<option value="progress">Progress</option>
												<option value="completed">Completed</option>
											</select>
										</td>
										: null
								}
							</tr>

						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default WorkTable