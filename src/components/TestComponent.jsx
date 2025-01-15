import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';
import { Icon } from '@iconify/react'; // Note: You'll need to install this package

import resultsData from '../data/races/los_andes_trail/results.json';


const CategoryResults = () => {
    const categoryResults = resultsData;
    const [selectedDistance, setSelectedDistance] = useState(categoryResults.distance[0]?.name);

    useEffect(() => {
        // Initialize DataTables for each distance
        categoryResults.distance.forEach((distance) => {
            const tableElement = document.querySelector(`div#table-${distance.name} table`);
            if (tableElement) {
                new DataTable(tableElement, {
                    info: false,
                    order: [[0, "asc"]],
                    columnDefs: [{ type: "num", targets: 0 }],
                    language: {
                        search: "Buscar:",
                        entries: {
                            _: "Correodores por página",
                            1: "Corredor",
                        },
                        zeroRecords: "No se encontraron resultados",
                    },
                });
            }
        });
    }, [categoryResults]);

    const handleDistanceChange = (distanceName) => {
        setSelectedDistance(distanceName);
    };

    return (
        <section>
            <div className="site-container pt-4">
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select your country
                    </label>
                    <select
                        id="tabs"
                        className="dark:bg-primary-800 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => handleDistanceChange(e.target.value)}
                        value={selectedDistance}
                    >
                        {categoryResults.distance.map((distance) => (
                            <option key={distance.name}>{distance.name}</option>
                        ))}
                    </select>
                </div>

                <ul className="hidden text-md font-medium text-center text-gray-500 rounded-lg shadow sm:flex">
                    {categoryResults.distance.map((distance) => (
                        <li key={distance.name} className="w-full focus-within:z-10 border border-base-300 hover:cursor-pointer overflow-hidden relative">
                            <button
                                className="w-full focus-within:shadow-lg"
                                onClick={() => handleDistanceChange(distance.name)}
                            >
                                <span className="main-text-gradient inline-block text-5xl w-full p-4 font-bold">
                                    {distance.name}
                                </span>
                            </button>

                            <div className="absolute text-primary-800 dark:text-primary-200 opacity-50">
                                <Icon icon="tabler:person-run" className="h-28 w-32" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {categoryResults.distance.map((distance) => (
                <div
                    key={distance.name}
                    className={`site-container my-7 ${selectedDistance !== distance.name ? 'hide-table' : ''}`}
                    id={`table-${distance.name}`}
                >
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-none w-full">
                            <thead>
                                <tr className="bg-base-800 text-white">
                                    <th className="px-2 py-3 w-4 text-left text-lg font-semibold">General</th>
                                    <th className="px-2 py-3 w-4 text-left text-lg font-semibold">Categoría</th>
                                    <th className="px-2 py-3 text-left text-lg font-semibold">Dorsal</th>
                                    <th className="px-2 py-3 text-left text-lg font-semibold">Nombres</th>
                                    <th className="px-2 py-3 text-left text-lg font-semibold">Categoría</th>
                                    <th className="px-2 py-3 text-left text-lg font-semibold">Tiempo Meta</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {distance.results.map((result) => (
                                    <tr key={result.dorsal} className="dark:hover:bg-primary-900 hover:bg-base-300 transition-colors">
                                        <td className="px-2 py-2 text-md">
                                            <span>Posición General: </span>
                                            {result.general_position}
                                        </td>
                                        <td className="px-2 py-2 text-md">
                                            <span>Posición Categoría: </span>
                                            {result.category_position}
                                        </td>
                                        <td className="px-2 py-2 text-md">
                                            <span>Dorsal: </span>#{result.dorsal}
                                        </td>
                                        <td className="px-2 py-2 text-md font-medium">
                                            <div className="flex">
                                                <p>{result.name}</p>
                                                {result.general_position === 1 && (
                                                    <Icon icon="tabler:medal" className="h-6 w-6 text-yellow-500 dark:text-yellow-300" />
                                                )}
                                                {result.general_position === 2 && (
                                                    <Icon icon="tabler:medal" className="h-6 w-6 text-gray-500 dark:text-gray-300" />
                                                )}
                                                {result.general_position === 3 && (
                                                    <Icon icon="tabler:medal" className="h-6 w-6 text-yellow-800" />
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-2 py-2 text-md">
                                            <span>Categoría: </span>
                                            {result.category}
                                        </td>
                                        <td className="px-2 py-2 text-md">{result.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}

            <style jsx>{`
        li:hover span {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }
        li span {
          transition: transform 0.3s ease-in-out;
        }
        li div {
          right: -50%;
          top: 0;
          transition: right 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        li:hover div {
          right: 0%;
          transform: scale(1.1);
          transition: right 0.3s ease-in-out;
        }
        table span {
          display: none;
        }
        div.hide-table {
          display: none;
        }
        table thead tr th:nth-child(1) {
          width: 10%;
        }
        table thead tr th:nth-child(2) {
          width: 10%;
        }
        table thead tr th:nth-child(3) {
          width: 10%;
        }
        @media (max-width: 640px) {
          table {
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          table thead {
            display: none;
          }

          table,
          table tbody,
          table tr,
          table td {
            display: block;
            width: 100%;
          }

          table tr {
            display: flex;
            flex-wrap: wrap;
            padding: 8px;
            margin-bottom: 8px;
            border-radius: 6px;
            border: 1px solid var(--color-base-300);
          }

          table tr td {
            padding: 4px 3px;
            position: relative;
            font-size: 0.85rem;
          }

          table tr td:nth-child(1) {
            width: 50%;
            order: 1;
          }

          table tr td:nth-child(2) {
            width: 50%;
            order: 2;
          }

          table tr td:nth-child(3) {
            width: 50%;
            order: 3;
          }

          table tr td:nth-child(4) {
            order: 0;
            width: 100%;
            font-size: 1rem;
            font-weight: 600;
            border-bottom: 2px solid var(--color-base-300);
            background: linear-gradient(to right, var(--color-base-900), rgba(var(--color-base-600), 0.9));
            background-clip: text;
            color: transparent;
            padding-bottom: 0.5rem;
          }

          table tr td:nth-child(5) {
            width: 50%;
            order: 4;
          }

          table tr td:nth-child(6) {
            width: 100%;
            order: 5;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-family: monospace;
            font-size: 1rem;
            text-align: center;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            letter-spacing: 2px;
            background: linear-gradient(to right, var(--color-base-900), rgba(var(--color-base-600), 0.9));
          }

          table td {
            text-align: center;
          }
          table td span {
            font-weight: bold;
            margin-bottom: 2px;
            display: block;
          }
          table td::before {
            content: attr(data-label);
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 2px;
            display: block;
          }
        }
      `}</style>
        </section>
    );
};

export default CategoryResults;