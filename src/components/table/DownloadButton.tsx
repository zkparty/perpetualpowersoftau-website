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
            const result = await fetch(PRESIGNED_URL + file).then(res => res.json())
            if (!result){
                throw new Error('Error getting presigned url:', result)
            }
            const { StorageClass, url } = result.preSignedUrlObject
            if (!StorageClass){
                // the object is in S3 standard storage
                window.open(url)
            } else {
                // the object is in S3 Glacier storage
                console.log(StorageClass)
                // TODO: implement a way to call request-retrieval url
            }
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