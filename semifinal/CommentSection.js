import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Image, //import Image
} from 'react-native';

export default function CommentSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim().length === 0) return;
    setComments([...comments, { id: Date.now().toString(), text: comment }]);
    setComment('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Image added here */}
        <Image
          source={require('../assets/mikenpm.jpg')}
          style={styles.topImage}
          resizeMode="cover"
        />

        <Text style={styles.title}>Comments</Text>

        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.commentBox}>
              <Text style={styles.commentText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={{ flexGrow: 1 }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={comment}
            onChangeText={setComment}
            placeholder="Write a comment..."
          />
          <Button title="Post" onPress={handleAddComment} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 16 },
  topImage: {
    width: 300,  // Specific width in pixels
    height: 300, // Specific height in pixels
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center', // Centers the image horizontally
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  commentBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  commentText: { fontSize: 16 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 8,
  },
});
