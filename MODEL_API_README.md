# Stutter Detection API

A Flask-based API for detecting stuttering in audio files using deep learning.

## Deployment on Hugging Face Spaces

This API is designed to run as a Docker container on Hugging Face Spaces.

### Files Required

- `app.py` - Main Flask application
- `Dockerfile` - Docker configuration
- `requirements.txt` - Python dependencies
- `stutter_detector_mio.pth` - Pre-trained model file
- `README.md` - This file

### API Endpoints

#### `GET /`
Returns API information and available endpoints.

#### `POST /analyze?mode=<mode>`
Analyzes an audio file for stuttering.

**Parameters:**
- `mode` (query parameter): `segments`, `seconds`, or `percentage`
- `audio` (form-data): Audio file to analyze

**Modes:**
1. **segments** - Returns label for each 3-second segment
2. **seconds** - Returns label for each second
3. **percentage** - Returns only the stutter percentage

#### `GET /health`
Health check endpoint.

### Usage Examples

```bash
# Mode 1: 3-second segments
curl -X POST -F "audio=@sample.mp3" \
  https://mio2mio22-stuttermodelapi.hf.space/analyze?mode=segments

# Mode 2: Per-second analysis
curl -X POST -F "audio=@sample.mp3" \
  https://mio2mio22-stuttermodelapi.hf.space/analyze?mode=seconds

# Mode 3: Percentage only
curl -X POST -F "audio=@sample.mp3" \
  https://mio2mio22-stuttermodelapi.hf.space/analyze?mode=percentage
```

### Response Examples

**Mode: segments**
```json
{
  "success": true,
  "duration": 12.5,
  "segments": [
    {
      "segment": 0,
      "start_time": 0.0,
      "end_time": 3.0,
      "label": "no_stutter",
      "confidence": 0.8234
    },
    {
      "segment": 1,
      "start_time": 3.0,
      "end_time": 6.0,
      "label": "stutter",
      "confidence": 0.7156
    }
  ]
}
```

**Mode: seconds**
```json
{
  "success": true,
  "duration": 12,
  "seconds": [
    {
      "second": 0,
      "label": "no_stutter",
      "confidence": 0.8234
    },
    {
      "second": 1,
      "label": "stutter",
      "confidence": 0.7156
    }
  ]
}
```

**Mode: percentage**
```json
{
  "success": true,
  "duration": 12,
  "stutter_percentage": 25.5
}
```

### Setup on Hugging Face Spaces

1. Create a new Space on Hugging Face
2. Select "Docker" as the SDK
3. Upload all required files:
   - `app.py`
   - `Dockerfile`
   - `requirements.txt`
   - `stutter_detector_mio.pth`
   - `README.md`
4. The Space will automatically build and deploy

### Local Testing

```bash
# Build the Docker image
docker build -t stutter-api .

# Run the container
docker run -p 7860:7860 stutter-api

# Test the API
curl http://localhost:7860/health
```

## Model Information

The model uses:
- Wav2Vec2 base model for feature extraction
- Attentive Statistics Pooling
- MLP classifier for stutter detection

## Notes

- Maximum file size: 50MB
- Supported formats: Any format supported by librosa (MP3, WAV, FLAC, etc.)
- Audio is automatically resampled to 16kHz
- Temporary files are cleaned up after processing
