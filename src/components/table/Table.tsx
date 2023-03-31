import styled from "styled-components"
import DownloadButton from "./DownloadButton"

const Table = () => {

    const data = [
        {
            'participantId': '1',
            'identity': 'nico.eth',
            'GPGKey': '001',
            'attestation': '0x1234',
            'IPFSHash': 'Qmb1ejQ2uSXJ5AukYEGdm73Lf8q8vg2As2beC2eYENnDtB',
            'size': '50',
            'file': 'current_state_3.txt'
        },
        {
            'participantId': '2',
            'identity': 'serrano.eth',
            'GPGKey': '002',
            'attestation': '0x5678',
            'IPFSHash': 'Qmb1ejQ2uSXJ5AukYEGdm73Lf8q8vg2As2beC2eYENnDtB',
            'size': '43',
            'file': 'current_state_3.txt'
        },
        {
            'participantId': '3',
            'identity': 'enrique.eth',
            'GPGKey': '003',
            'attestation': '0x9012',
            'IPFSHash': 'Qmb1ejQ2uSXJ5AukYEGdm73Lf8q8vg2As2beC2eYENnDtB',
            'size': '48',
            'file': 'current_state_3.txt'
        },
    ]


    return (
        <TableComponent>
            <TableHeader>
                <tr>
                    <th>Participant ID</th>
                    <th>Identity</th>
                    <th>GPG key</th>
                    <th>Attestation</th>
                    <th>IPFS Hash</th>
                </tr>
            </TableHeader>
            <tbody>
                {data.map((record) => (
                    <tr key={record.participantId}>
                        <td>{record.participantId}</td>
                        <td>{record.identity}</td>
                        <td>{record.GPGKey}</td>
                        <td>{record.attestation}</td>
                        <td>{record.IPFSHash} (size:{record.size} GB)</td>
                        <td><DownloadButton file={record.file}/></td>
                    </tr>
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

export default Table