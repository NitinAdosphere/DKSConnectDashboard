import { useDropzone } from 'react-dropzone'
import { message } from 'antd'

const FileDropzone = ({
    onFilesAdded,
    loading,
    setFileErrors
}: {
    onFilesAdded: (files: File[]) => void
    loading: boolean
    setFileErrors: (errors: string[]) => void
}) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles, rejectedFiles) => {
            const errors: string[] = []
            if (rejectedFiles.length > 0) {
                rejectedFiles.forEach((file) => {
                    if (file.errors.some((err) => err.code === 'file-too-large')) {
                        errors.push(`${file.file.name} exceeds the 10MB limit.`)
                    }
                    if (file.errors.some((err) => err.code === 'file-invalid-type')) {
                        errors.push(`${file.file.name} has an unsupported file type.`)
                    }
                })
            }
            setFileErrors(errors)

            onFilesAdded(acceptedFiles)
        },
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
            'video/mp4': ['.mp4']
        },
        maxSize: 10 * 1024 * 1024, // 10MB limit
        multiple: true // Allow multiple file uploads
    })

    return (
        <div
            {...getRootProps()}
            className={`w-full h-32 flex flex-col justify-center items-center border-dashed border-2 ${
                isDragActive ? 'border-blue-500' : 'border-gray-300'
            } rounded-md cursor-pointer transition-colors duration-300 ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
            <input {...getInputProps()} />
            <p className="text-lg font-semibold text-customGray">{isDragActive ? 'Drop files here...' : 'Drag & drop files or click to select'}</p>
            <p className="text-sm text-gray-500">Supported formats: .jpg, .jpeg, .png, .mp4 (max 10MB)</p>
        </div>
    )
}

export default FileDropzone
