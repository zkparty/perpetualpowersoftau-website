import styled from "styled-components"
import {data} from "../../contributions.json"
import DownloadButton from "./DownloadButton"


const Table = () => {
    return (
        <TableComponent>
            <TableHeader>
                <tr>
                    <th>Participant ID</th>
                    <th>Identity</th>
                    <th>Previous Challenge Hash</th>
                    <th>Response Hash</th>
                    <th>Challenge Hash</th>
                    <th>GPG key</th>
                    <th>Attestation</th>
                    <th>IPFS Hash</th>
                </tr>
            </TableHeader>
            <tbody>
                {data.map((record) => (
                    <TableRow key={record.participantId}>
                        <td>{record.participantId}</td>
                        <td>{record.identity}</td>
                        <td>{record.prevChallengeHash.substring(0,6)}</td>
                        <td>{record.responseHash.substring(0, 6)}</td>
                        <td>{record.challengeHash.substring(0,6)}</td>
                        <td>{record.GPGKey}</td>
                        <td>{record.attestation}</td>
                        <td>{record.IPFSHash} (size:{record.size} GB)</td>
                        <td><DownloadButton file={record.responseUrl} name='Response' /></td>
                        <td><DownloadButton file={record.challengeUrl} name='Challenge' /></td>
                    </TableRow>
                ))}
            </tbody>
        </TableComponent>
    )
}

const TableComponent = styled.table`
    position: relative;
    z-index: 1;
    width: 100%;
    border-radius: 5px;
    padding-block: 20px;
    padding-inline: 30px;
    background: #727272ab;
    border-collapse: collapse;
`

const TableHeader = styled.thead`
    height: 40px;
    font-weight: 700;
    border-bottom: 2px solid #a4a4a4;
`

const TableRow = styled.tr`
    height: 50px;
`

export default Table