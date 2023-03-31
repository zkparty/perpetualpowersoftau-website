import { useState } from "react";
import styled from "styled-components";
import { PRESIGNED_URL } from "../../constants";
import ErrorMessage from "../Error";
import LoadingSpinner from "../LoadingSpinner";

type Props = {
    file: string;
}

const DownloadButton = ({ file }: Props) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const clickHandler = async () => {
        setLoading(true)
        setError(false)
        try {
            const { presignedUrl } = await fetch(PRESIGNED_URL + file).then(res => res.json())
            window.open(presignedUrl);
            setLoading(false)
        } catch (error) {
            setError(true)
            console.error(error)
            setTimeout(() => setError(false), 3000)
            setLoading(false)
        }
    }

    return (
        <Button onClick={clickHandler} disabled={loading}>
            {loading ? <LoadingSpinner/> : 'Download'}
            {error ? <ErrorMessage>
                There was an error downloading the file
            </ErrorMessage> : null}
        </Button>
    )
};

const Button = styled.button`
    width: 100%;
    height: 40px;
`

export default DownloadButton;