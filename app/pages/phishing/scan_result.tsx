import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function PhishingScanResult() {
  // 1. Get the data sent from the previous page
  const { risk, score, reason, content } = useLocalSearchParams();
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Scan Analysis Result</Text>
      
      <View style={styles.resultBox}>
        <Text style={styles.label}>Risk Level:</Text>
        <Text style={[styles.value, { color: risk === 'HIGH' ? 'red' : 'green' }]}>
          {risk}
        </Text>

        <Text style={styles.label}>Safety Score:</Text>
        <Text style={styles.value}>{score}%</Text>

        <Text style={styles.label}>AI Analysis Reason:</Text>
        <Text style={styles.reasonText}>{reason}</Text>

        <Text style={styles.label}>Original Content:</Text>
        <Text style={styles.contentPreview} numberOfLines={3}>{content}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.dismiss()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  resultBox: { padding: 15, backgroundColor: '#f9f9f9', borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
  label: { fontSize: 14, color: '#666', marginTop: 15, fontWeight: '600' },
  value: { fontSize: 20, fontWeight: 'bold', marginTop: 4 },
  reasonText: { fontSize: 16, lineHeight: 22, marginTop: 4, color: '#333' },
  contentPreview: { fontSize: 14, fontStyle: 'italic', color: '#888', marginTop: 4 },
  button: { marginTop: 30, backgroundColor: '#2563EB', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});