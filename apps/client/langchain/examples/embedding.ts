import tf from '@tensorflow/tfjs';

// Assume the glossary size is 10000, the embedding dimension is 300
const vocabularySize = 10000;
const embeddingDimension = 300;

// creates one Embedding layer
const embeddingLayer = tf.layers.embedding({
  inputDim: vocabularySize,
  outputDim: embeddingDimension,
});

const tokenIds = tf.tensor([[1045, 2293, 4083]]); // Batch size is 1，there are three Tokens

// converts the Tokens IDs to embedding vector by using embedding layer
const embeddings:
  | tf.Tensor<tf.Rank>
  | tf.Tensor<tf.Rank>[]
  | tf.SymbolicTensor
  | tf.SymbolicTensor[] = embeddingLayer.apply(tokenIds);

console.log(embeddings.toString());
