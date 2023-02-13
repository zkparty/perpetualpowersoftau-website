const Table = () => {

    const data = [
        {
            'participantId': '1',
            'identity': 'nico.eth',
            'GPGKey': '001',
            'attestation': '0x1234',
            'IPFSHash': 'Qmb1ejQ2uSXJ5AukYEGdm73Lf8q8vg2As2beC2eYENnDtB'
        },
        {
            'participantId': '2',
            'identity': 'serrano.eth',
            'GPGKey': '002',
            'attestation': '0x5678',
            'IPFSHash': 'Qmb1ejQ2uSXJ5AukYEGdm73Lf8q8vg2As2beC2eYENnDtB'
        },
        {
            'participantId': '3',
            'identity': 'enrique.eth',
            'GPGKey': '003',
            'attestation': '0x9012',
            'IPFSHash': 'Qmb1ejQ2uSXJ5AukYEGdm73Lf8q8vg2As2beC2eYENnDtB'
        },
    ]


    return (
        <table>
            <thead>
                <tr>
                    <th>Participant ID</th>
                    <th>Identity</th>
                    <th>GPG key</th>
                    <th>Attestation</th>
                    <th>IPFS Hash</th>
                </tr>
            </thead>
            <tbody>
                {data.map((record) => (
                    <tr key={record.participantId}>
                        <td>{record.participantId}</td>
                        <td>{record.identity}</td>
                        <td>{record.GPGKey}</td>
                        <td>{record.attestation}</td>
                        <td>{record.IPFSHash}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table