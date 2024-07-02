import React, { ChangeEvent } from 'react'

interface VideoDetailsProps {
    handleSubmit: (e: React.FormEvent) => void;
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleTileChange: (event: ChangeEvent<HTMLInputElement>) => void
    handlePrivatelyChange: (event: ChangeEvent<HTMLSelectElement>) => void
    title: string
    privately: string
    // setEmail: React.Dispatch<React.SetStateAction<string>>;
    // setOriginalName: React.Dispatch<React.SetStateAction<string>>;
    // setTitle: React.Dispatch<React.SetStateAction<string>>;
    // setSize: React.Dispatch<React.SetStateAction<number>>;
    // setPrivately: React.Dispatch<React.SetStateAction<boolean>>;
    // setUrl: React.Dispatch<React.SetStateAction<string>>;
    // email: string;
    // originalName: string;
    // title: string;
    // size: number;
    // privately: boolean;
    // url: string;
  }

const VideoDetails: React.FC<VideoDetailsProps> = ({
  handleSubmit,
  handleFileChange,
  handleTileChange,
  title,
  handlePrivatelyChange,
  privately
  // setEmail,
  // setOriginalName,
  // setTitle,
  // setSize,
  // setPrivately,
  // setUrl,
  // email,
  // originalName,
  // title,
  // size,
  // privately,
  // url

}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input type="text" value={title} onChange={handleTileChange} />
      <select value={privately} onChange={handlePrivatelyChange}>
        <option value="option1">public</option>
        <option value="option2">private</option>
      </select>
      <button type="submit">Upload</button>
    </form>
  //   <form onSubmit={handleSubmit}>
  //   <div>
  //     <label>Email:</label>
  //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  //   </div>
  //   <div>
  //     <label>Original Name</label>
  //     <input type="text" value={originalName} onChange={(e) => setOriginalName(e.target.value)} />
  //   </div>
  //   <div>
  //     <label>Title:</label>
  //     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
  //   </div>
  //   <div>
  //     <label>Private:</label>
  //     <input type="boolean" value={privately} onChange={(e) => setprivately(e.target.value)} />
  //   </div>
  //   <div>
  //     <label>url:</label>
  //     <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
  //   </div>
  //   <button type="submit">Register</button>
  // </form>
  )
}

export default VideoDetails