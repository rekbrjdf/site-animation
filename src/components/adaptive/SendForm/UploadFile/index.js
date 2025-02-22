'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { bindClasses } from 'utils/functions';
import defaultFileSvg from './icon.svg';
import classes from './file.module.scss';

const bc = bindClasses(classes, 'form-file');

export default function UploadFile({ setFileInfo }) {
  const [isUpload, setUpload] = useState(null);
  const [fileName, setFileName] = useState('');

  const uploadHandler = (e) => {
    e.persist();
    const file = e.target.files[0];
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      let type;
      const size = file.size;
      const filename = file.name;

      if (file.type !== null && file.type !== undefined) {
        type = String(file.type).slice(-3);

        setFileName(filename);

        if ((type === 'peg' || type === 'png' || type === 'pdf') && size < 5 * 1000000) {
          setUpload(true);
          let result;

          reader.onloadend = async () => {
            result = await reader.result.split(',')[1];
            setFileInfo(
              // eslint-disable-next-line no-return-assign
              (prev) =>
                // eslint-disable-next-line no-unused-vars
                (prev = [
                  {
                    filename,
                    content: result,
                    encoding: 'base64',
                    size,
                  },
                ]),
            );
          };
        } else {
          setUpload(false);
          setFileInfo(null);
        }
      }
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <div className={classes['form-file']}>
      <Image className="company-form__img" src={defaultFileSvg} alt="defaultFileSvg" />
      {fileName === '' ? (
        <>
          <label className={bc.__label} htmlFor="upload">
            Please attach your CV (pdf, jpg, png format. not more than 5Mb)
          </label>
          <input onChange={uploadHandler} className={bc.__inputUpload} id="upload" type="file" />
        </>
      ) : (
        <>
          <>
            <label htmlFor="upload">{fileName}</label>
            <input onChange={uploadHandler} className={bc.__inputUpload} id="upload" type="file" />
          </>
          {isUpload === false ? (
            <>
              <label htmlFor="upload$">The file was not attached</label>
              <input
                onChange={uploadHandler}
                className={bc.__inputUpload}
                id="upload$"
                type="file"
              />
            </>
          ) : (
            ''
          )}
        </>
      )}
    </div>
  );
}
