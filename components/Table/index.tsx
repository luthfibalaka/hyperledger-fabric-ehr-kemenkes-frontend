import { useEffect, useState } from "react";

type ehr = {
    Address: string;
    DateOfBirth: string;
    Diagnosis: string[];
    Gender: string;
    ID: string;
    Insurance: string;
    Medication: string[];
    Name: string;
    PhoneNumber: string;
};

const Table = () => {
    const [ehrs, setEhrs] = useState<ehr[]>([]);
    useEffect(() => {
        fetch("http://34.136.191.235:3000/api/assets", {
            method: "GET",
            headers: {
                "x-api-key": "0e7800c7-9632-49a5-8170-151b010e4655",
            },
        })
            .then((response) => response.json())
            .then((data) => setEhrs(data))
            .catch((err) => console.error(err));
    });
    return (
        <>
            <table
                className="table is-fullwidth is-striped is-hoverable"
                aria-describedby="table EHR data"
            >
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Insurance</th>
                        <th>Medication</th>
                        <th>Diagnosis</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ehrs.map((ehr) => {
                        return (
                            <tr key={ehr.ID}>
                                <td key={"ehr-name"}>{ehr.Name}</td>
                                <td key={"ehr-gender"}>{ehr.Gender}</td>
                                <td key={"ehr-phone"}>{ehr.PhoneNumber}</td>
                                <td key={"ehr-dob"}>{ehr.DateOfBirth}</td>
                                <td key={"ehr-addr"}>{ehr.Address}</td>
                                <td key={"ehr-insurance"}>{ehr.Insurance}</td>
                                <td key={"ehr-medication"}>{ehr.Medication}</td>
                                <td key={"ehr-diagnosis"}>{ehr.Diagnosis}</td>
                                <td>
                                    <button className="button is-small">
                                        History
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Table;
